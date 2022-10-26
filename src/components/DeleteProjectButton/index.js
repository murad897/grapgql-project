import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../../queries/projectqueries";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../../mutations/projectMutations";

const DeleteProjectButton = ({ clientId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: clientId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex ms-auto mt-5">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash />
        Delete project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
