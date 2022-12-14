import { useQuery } from "react-query";
import { findAll, findById, destroy, create, update } from "./membre.service";
import {
  useCreate as _useCreate,
  useDelete as _useDelete,
  useUpdate as _useUpdate,
} from "../../../../shared/store";

const entity = "membres";

export const useMembres = () => {
  const { data, refetch, ...others } = useQuery([entity, "findAll"], findAll, {
    refetchInterval: 2_000,
  });
  let membres = data || [];
  return { membres, ...others };
};

export const useMembreById = (id) => {
  const { data, ...others } = useQuery([entity, "findById"], () =>
    findById(id)
  );
  let membre = data || [];
  return { membre, ...others };
};
// export const useMembreByIdBureau = (idBureau) => {
//   const { data, ...others } = useQuery([entity, "findById"], () =>
//     findById(idBureau)
//   );
//   let membre = data || [];
//   return { membre, ...others };
// };

export const useCreate = () => _useCreate(create);

export const useDelete = () => _useDelete(destroy);

export const useUpdate = () => _useUpdate(update);
