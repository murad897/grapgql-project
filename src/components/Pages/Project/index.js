import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../../queries/projectqueries";
import Spinner from "../../Spinner";
import ClientInfo from "../../ClientInfo";
import DeleteProjectButton from "../../DeleteProjectButton";
import EditProjectForm from "../../EditProjectForm";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-full card p-3">
          <Link to="/" className="btn btn-light btn-sm w-full d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditProjectForm project={data.project} />
          <DeleteProjectButton clientId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;
