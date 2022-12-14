import { useQuery } from "react-query";
import {
  findAll,
  findById,
  destroy,
  create,
  update,
} from "./localite.services";
import {
  useCreate as _useCreate,
  useDelete as _useDelete,
  useUpdate as _useUpdate,
} from "../../../../shared/store";

const entity = "localite";

export const useLocalite = () => {
  const { data, refetch, ...others } = useQuery([entity, "findAll"], findAll, {
    refetchInterval: 2_000,
  });
  let localites = data || [];
  return { localites, ...others };
};

export const useLocaliteById = (id) => {
  const { data, ...others } = useQuery([entity, "findById"], () =>
    findById(id)
  );
  let localite = data || [];
  return { localite, ...others };
};

export const useCreate = () => _useCreate(create);
export const useDelete = () => _useDelete(destroy);
export const useUpdate = () => _useUpdate(update);
