export class ProductProfileManager {
  constructor(productProfiles, api) {
    this.productProfiles = this.transformProfileData(productProfiles);
    this.api = api;
  }

  transformProfileData(profileEdges) {
    // Currently used on the product profile page.

    return profileEdges.reduce((acc, edge) => {
      const { product, ...profile } = edge.node;

      let liveSeason = null;
      let imageURL = null;
      if (profile.live) {
        liveSeason = {
          name: profile.season.name,
          startDate: new Date(profile.season.startDate),
          endDate: new Date(profile.season.endDate),
          updatedAt: new Date(profile.updatedAt),
        };
        imageURL = product.images.edges.length > 0 ? product.images.edges[0].node.source : null;
      }

      profile.season.startDate = new Date(profile.season.startDate);
      profile.season.endDate = new Date(profile.season.endDate);

      if (acc[product.id]) {
        acc[product.id].profiles.push(profile);
        if (liveSeason) {
          acc[product.id].liveSeason = liveSeason;
          acc[product.id].imageURL = imageURL;
        }
      } else {
        acc[product.id] = {
          ...product,
          imageURL,
          profiles: [profile],
          liveSeason,
        };
      }

      return acc;
    }, {});
  }

  formatProductDataForView() {
    // Currently used on the product profile page.

    return Object.values(this.productProfiles).map((productData, index) => {
      const { id, title, profiles, imageURL } = productData;

      const daysSinceLastUpdate = Math.floor((new Date() - new Date(productData.liveSeason.updatedAt)) / (1000 * 60 * 60 * 24));

      const seasonName = productData.liveSeason.name;
      const seasonStartDate = new Date(productData.liveSeason.startDate).toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      const seasonEndDate = new Date(productData.liveSeason.endDate).toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      return {
        imageURL,
        id,
        title,
        daysSinceLastUpdate,
        seasonName,
        seasonStartDate,
        seasonEndDate,
        profiles,
      };
    });
  }

  updateDatesForNewYear() {
    const currentYear = new Date().getFullYear();

    for (const productId in this.productProfiles) {
      this.productProfiles[productId].profiles.forEach((profile) => {
        profile.season.startDate.setFullYear(currentYear);
        profile.season.endDate.setFullYear(currentYear);
      });
    }
  }

  getCurrentProductProfile(productId) {
    const currentDate = new Date();
    const profiles = this.productProfiles[productId].profiles;

    const activeProfiles = profiles.filter((profile) => {
      if (profile.profileName === "Default") return false;

      return profile.season.startDate <= currentDate && profile.season.endDate >= currentDate;
    });

    console.log(activeProfiles);

    if (activeProfiles.length > 0) {
      // If there are active profiles, return the one with the shortest duration
      return activeProfiles.reduce((shortestProfile, currentProfile) => {
        console.log(`current profile: ${currentProfile.profileName}`);

        const shortestProfileDuration = shortestProfile.season.endDate - shortestProfile.season.startDate;
        const currentProfileDuration = currentProfile.season.endDate - currentProfile.season.startDate;
        console.log(`current profile duration: ${currentProfileDuration}`);
        return currentProfileDuration < shortestProfileDuration ? currentProfile : shortestProfile;
      });
    } else {
      // If no profile is active, return the default
      return this.productProfiles[productId].profiles.find((profile) => profile.profileName === "Default");
    }
  }

  // Visualize the timeline for a specific product
  visualizeTimeline(productId) {
    const profiles = this.productProfiles[productId].profiles;
    profiles.sort((a, b) => a.startDate - b.startDate);

    profiles.forEach((profile) => {
      console.log(`${profile.profileName.padEnd(10, " ")}: ${profile.startDate.toDateString()} - ${profile.endDate.toDateString()}`);
    });
  }

  async refreshAllProductProfiles() {
    for (const productId in this.productProfiles) {
      console.log(`starting profile: ${productId}`);
      const refreshedProfile = this.getCurrentProductProfile(productId);
      console.log(`refreshed profile: ${refreshedProfile}`);
      if (!this.productProfiles[productId].liveSeason || refreshedProfile.season.name !== this.productProfiles[productId].liveSeason.name) {
        // The profile has changed, update it

        // Setting previous active profile to inactive in class and database
        this.productProfiles[productId].profiles.forEach(async (profile) => {
          if (profile.live) {
            await this.api.shopProductProfile.update(profile.id, { live: false });
          }
        });

        await this.api.shopProductProfile.update(refreshedProfile.id, { live: true });

        this.productProfiles[productId].liveSeason = {
          name: refreshedProfile.season.name,
          startDate: new Date(refreshedProfile.season.startDate),
          endDate: new Date(refreshedProfile.season.endDate),
        };

        // Setting new active profile in class and database
        // const newActiveProfile = this.productProfiles[productId].profiles.find((profile) => profile.season.name === refreshedProfile.season.name);
        // if (newActiveProfile) {
        //   newActiveProfile.active = true;
        //   await this.api.shopProductProfile.update(newActiveProfile.id, { active: true });
        // }
      }
    }
  }
}
