import React from "react";
import AppLayout from "../../Layout/AppLayout";
import { useAuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

const MembreActualite = () => {
  const { auth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/connexion");
    }
  }, [auth, navigate]);
  return (
    // <AppLayout>
    <Box>
      {!auth && <CircularProgress />}
      {auth && (
        <div>
          <h1>Membre Actu</h1>
        </div>
      )}
    </Box>
    // </AppLayout>
  );
};

export default MembreActualite;
