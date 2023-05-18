import React, { useState } from "react";
import { DataView } from "primereact/dataview";
import { ToggleButton } from "primereact/togglebutton";
import { Calendar } from "primereact/calendar";
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
  console.log(season);
  const handleActiveToggle = () => {
    const updatedSeason = {
      ...season,
      active: !season.active,
    };
    updateActiveStatus(updatedSeason);
  };

  return (
    <div className="flex flex-col p-6 space-y-2 bg-white rounded shadow mb-1">
      <h4 className="text-lg font-bold">{season.name}</h4>
      <p>Start Date: {season.startDate}</p>
      <p>End Date: {season.endDate}</p>
      <div className="flex flex-row items-center gap-4 justify-start">
        <p>Status: {season.active ? "Active" : "Inactive"}</p>
        {/* toggle button below */}
        <button onClick={handleActiveToggle} className="px-4 py-2 text-white bg-gray-800 rounded w-20">
          Toggle
        </button>
      </div>
      <button onClick={() => startEditing(season)} className="px-4 py-2 text-white bg-gray-800 rounded w-20">
        Edit
      </button>
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

  const handleSeedClick = () => {
    console.log("Clicked seed button.");
    seedSend();
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
          <div className="flex flex-col mb-5 mt-2 gap-4 rounded">
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
