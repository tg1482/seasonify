import React, { useState } from "react";
import { DataView } from "primereact/dataview";
import { useQuery, useMutation, useFetch } from "@gadgetinc/react";
import { Layout, Page, Spinner, Text } from "@shopify/polaris";
import moment from "moment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "./api";

const schema = yup.object().shape({
  name: yup.string().required(),
  startDate: yup.date().required(),
  endDate: yup.date().required(),
  active: yup.boolean().required(),
});

const shopSeasonsQuery = `
    query {
        shopSeasonDimensions {
            edges {
                node {
                    id
                    name
                    startDate
                    endDate
                    updatedAt
                    active
                    shopId
                }
            }
        }
    }
`;

const SeasonForm = ({ register, errors, handleSubmit, saveChanges, season, cancelEditing }) => {
  return (
    <form onSubmit={handleSubmit(saveChanges)} className="p-6 space-y-4 bg-white rounded shadow mb-1">
      <div className="flex flex-col">
        <label className="text-lg font-bold" htmlFor="name">
          Name
        </label>
        <input {...register("name")} defaultValue={season?.name} placeholder="Name" className="w-full px-4 py-2 border rounded" id="name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col">
        <label className="text-lg font-bold" htmlFor="startDate">
          Start Date
        </label>
        <input
          {...register("startDate")}
          defaultValue={season?.startDate}
          placeholder="Start Date"
          className="w-full px-4 py-2 border rounded"
          id="startDate"
        />
        {errors.startDate && <p className="text-red-500">{errors.startDate.message}</p>}
      </div>

      <div className="flex flex-col">
        <label className="text-lg font-bold" htmlFor="endDate">
          End Date
        </label>
        <input
          {...register("endDate")}
          defaultValue={season?.endDate}
          placeholder="End Date"
          className="w-full px-4 py-2 border rounded"
          id="endDate"
        />
        {errors.endDate && <p className="text-red-500">{errors.endDate.message}</p>}
      </div>

      <div className="flex flex-col">
        <label className="text-lg font-bold" htmlFor="active">
          Status
        </label>
        <input
          {...register("active")}
          defaultValue={season?.active === "Active"}
          placeholder="Active"
          className="w-full px-4 py-2 border rounded"
          id="active"
        />
        {errors.active && <p className="text-red-500">{errors.active.message}</p>}
      </div>

      <div className="flex justify-start mt-4 space-x-2">
        <button type="button" onClick={cancelEditing} className="px-4 py-2 text-white bg-gray-800 rounded">
          Hide
        </button>
        <button type="submit" className="px-4 py-2 text-white bg-gray-800 rounded">
          Save
        </button>
      </div>
    </form>
  );
};

const SeasonCard = ({ season, startEditing, updateActiveStatus }) => {
  const handleActiveToggle = () => {
    const updatedSeason = {
      ...season,
      active: !season.active,
    };
    updateActiveStatus(updatedSeason);
  };

  return (
    <div className="flex flex-col p-3 pl-5 space-y-2 bg-white rounded-lg shadow mb-1">
      <h4 className="text-lg font-bold">{season.name}</h4>
      <div className="flex flex-col items-start gap-2 justify-start bg-slate-50 w-max p-2 text-md">
        <p>
          {" "}
          <span className="font-bold text-xs">Start Date:</span> {season.startDate}
        </p>
        <p>
          {" "}
          <span className="font-bold text-xs">End Date:</span> {season.endDate}
        </p>
        <p>
          {" "}
          <span className="font-bold text-xs">Status:</span> {season.active ? "Active" : "Inactive"}
        </p>
      </div>
      <div className="flex flex-row items-center gap-2 justify-start">
        <button onClick={() => startEditing(season)} className="px-5 py-1 text-white bg-gray-800 rounded text-sm">
          Edit
        </button>
        <button
          onClick={handleActiveToggle}
          className={`px-3 py-1 text-white bg-gray-800 rounded text-sm ${!season.active ? "bg-green-600" : "bg-red-700"}`}
        >
          {season.active ? "Deactivate" : "Activate"}
        </button>
      </div>
    </div>
  );
};

const SeasonPage = () => {
  const [{ data, fetching, error }] = useQuery({
    query: shopSeasonsQuery,
  });

  // const shopId = data?.shopSeasonDimensions?.edges[0]?.node?.shopId;
  const shopId = 76379554098;

  // Form state logic - Season Edit / Create

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [editSeason, setEditSeason] = useState(null);
  const [isNewFormOpen, setNewFormOpen] = useState(false);

  const toggleNewForm = () => {
    setNewFormOpen(!isNewFormOpen);
  };

  const startEditing = (season) => {
    reset(season);
    setEditSeason(season.id);
  };

  const cancelEditing = () => {
    setEditSeason(null);
  };

  const saveChanges = async (data) => {
    try {
      const { id, updatedAt, ...updateData } = data;
      // Update our season in Gadget with the updated details
      await api.shopSeasonDimension.update(editSeason, updateData);
      setEditSeason(null);
    } catch (err) {
      console.error("Error updating season:", err);
    }
  };

  const handleNewSeasonSubmit = async (data) => {
    try {
      const { id, updatedAt, ...createData } = data;
      createData.shop = { _link: shopId }; // Add the shop ID to the create data
      // Create a new season in Gadget with the form data
      await api.shopSeasonDimension.create(createData);
      toggleNewForm(); // Close the form
    } catch (err) {
      console.error("Error creating season:", err);
    }
  };

  // Active Status Toggle Logic

  const updateActiveStatus = async (season) => {
    console.log("Updating season active status:", season);
    try {
      await api.shopSeasonDimension.update(season.id, { active: season.active });
    } catch (err) {
      console.error("Error updating season:", err);
    }
  };

  // Seeding logic

  const [{ fetching: seedFetching, error: seedError }, seedSend] = useFetch("/install/season-seed", {
    method: "POST",
    body: JSON.stringify({ shopId: shopId }),
  });

  const [{}, seedProfileSend] = useFetch("/install/product-profile-seed", {
    method: "POST",
    body: JSON.stringify({ shopId: shopId }),
  });

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSeedClick = async () => {
    console.log("Clicked seed button.");
    await seedSend();
    console.log("Waiting...");
    await delay(3000);
    await seedProfileSend();
    if (!seedError) {
      console.log("Seed button was clicked. Data seeding has been initiated.");
    } else {
      console.error("Error in seeding: ", seedError);
    }
  };

  // Form Display Logic

  const seasonData = data?.shopSeasonDimensions?.edges?.map((season) => ({
    id: season.node.id,
    name: season.node.name,
    startDate: moment(season.node.startDate).format("MMMM D, YYYY"),
    endDate: moment(season.node.endDate).format("MMMM D, YYYY"),
    updatedAt: moment(season.node.updatedAt).format("MMMM D, YYYY"),
    active: season.node.active,
  }));

  const seasonItemTemplate = (season) => {
    if (editSeason === season.id) {
      return <SeasonForm {...{ register, errors, handleSubmit, saveChanges, season, cancelEditing }} />;
    } else {
      return <SeasonCard {...{ season, startEditing, updateActiveStatus }} />;
    }
  };

  if (fetching) return <Spinner accessibilityLabel="Loading seasons" size="large" />;

  if (error) {
    return (
      <Page title="Error">
        <Text variant="bodyMd" as="p">
          Error: {error.toString()}
        </Text>
      </Page>
    );
  }

  return (
    <Page title="Seasons">
      {isNewFormOpen ? (
        <SeasonForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          saveChanges={handleNewSeasonSubmit}
          season={{}}
          cancelEditing={toggleNewForm}
        />
      ) : (
        <>
          <div className="flex flex-col mb-5 rounded">
            <DataView value={seasonData} itemTemplate={seasonItemTemplate} layout="list" />
          </div>
          <button onClick={toggleNewForm} className="flex px-4 py-2 text-white bg-gray-800 rounded mb-4">
            Create New
          </button>
          <button onClick={handleSeedClick} className="flex px-4 py-2 text-white bg-gray-800 rounded mb-4">
            Seed
          </button>
        </>
      )}
    </Page>
  );
};

export default SeasonPage;
