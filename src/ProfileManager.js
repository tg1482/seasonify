class ProductProfileManager {
  constructor(productProfiles) {
    this.productProfiles = productProfiles;
  }

  // Update the dates for the new year
  updateDatesForNewYear() {
    const currentYear = new Date().getFullYear();
    this.productProfiles.forEach((profile) => {
      profile.startDate.setFullYear(currentYear + 1);
      profile.endDate.setFullYear(currentYear + 1);
    });
  }

  // Get the current profile for a specific product
  getCurrentProductProfile(productName) {
    const currentDate = new Date();

    // We find all the active profiles
    const activeProfiles = this.productProfiles.filter((profile) => {
      // Ignore the default profile here
      if (profile.profileName === "Default") return false;

      return profile.product === productName && profile.startDate <= currentDate && profile.endDate >= currentDate;
    });

    if (activeProfiles.length > 0) {
      // If there are active profiles, return the one with the shortest duration
      return activeProfiles.reduce((shortestProfile, currentProfile) => {
        const shortestProfileDuration = shortestProfile.endDate - shortestProfile.startDate;
        const currentProfileDuration = currentProfile.endDate - currentProfile.startDate;
        return currentProfileDuration < shortestProfileDuration ? currentProfile : shortestProfile;
      });
    } else {
      // If no profile is active, return the default
      return this.productProfiles.find((profile) => profile.profileName === "Default" && profile.product === productName);
    }
  }

  // Visualize the timeline for a specific product
  visualizeTimeline(productName) {
    const profiles = this.productProfiles.filter((profile) => profile.product === productName);
    profiles.sort((a, b) => a.startDate - b.startDate);

    profiles.forEach((profile) => {
      console.log(`${profile.profileName.padEnd(10, " ")}: ${profile.startDate.toDateString()} - ${profile.endDate.toDateString()}`);
    });
  }
}

// Usage:
const manager = new ProductProfileManager(productProfiles);
manager.visualizeTimeline("Product 1");
console.log(manager.getCurrentProductProfile("Product 1"));
