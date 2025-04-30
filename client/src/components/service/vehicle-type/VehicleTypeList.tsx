import { IVehicleType, IServiceCategory, IService, TModuleStyle } from "@/types";
import React, { useMemo, useState } from "react";
import {
  DefaultError,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import Loader from "@/components/elements/Loader";
import Modal from "@/components/elements/Modal";
import VehicleTypeAdd from "./VehicleTypeAdd";
import VehicleTypeCard from "./VehicleTypeCard";
import { deleteVehicleTypeOptions, useUpdateVehicleTypeOptions, vehicleTypesOptions } from "@/app/_requests/vehicle-types";

interface VehicleTypeListProps {
  styles: TModuleStyle;
}
function VehicleTypeList({ styles }: VehicleTypeListProps) {

  const [addOnId, setAddOnId] = useState<number | null>(null);
  
  const queryClient = useQueryClient(); // ✅ React Query Client
  const { data: allVehicleTypes } = useSuspenseQuery(vehicleTypesOptions);
  const updateVehicleTypeMutation = useMutation<unknown, DefaultError, { id: number; formData: FormData }>(useUpdateVehicleTypeOptions(queryClient));



  const deleteVehicleTypeMutation = useMutation<unknown, DefaultError, number>(
    deleteVehicleTypeOptions(queryClient)
  );

  const handleDeleteVehicleType = async (
    e: React.SyntheticEvent,
    vehicleTypeId: number
  ) => {
    e.preventDefault();
    await deleteVehicleTypeMutation.mutate(vehicleTypeId);
  };

  const setEditingAddOnId=(e: React.SyntheticEvent, id: number)=>{
    e.preventDefault();
    setAddOnId(id);
  }

  const handleUpdateVehicleType=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if(addOnId){
      updateVehicleTypeMutation.mutate({ id: addOnId, formData });
      form.reset();
    }
    setAddOnId(null);
  }

  const selectedVehicleType = useMemo(()=>{
    if(!addOnId) return null;
    return allVehicleTypes.find((aos)=> aos.id === addOnId);
  }, [addOnId, allVehicleTypes]);


  if (deleteVehicleTypeMutation.isPending) return <Loader />;

  return (
    <div className="d-flex flex-wrap gap-2 mt-3">
      <Modal
        isOpen={addOnId ? true : false}
        title="Update Vehicle Type"
        submitButtonText="Update"
        children={
          <VehicleTypeAdd selectedVehicleType={selectedVehicleType} />
        }
        onSubmit={handleUpdateVehicleType}
        onClose={() => setAddOnId(null)}
      /> 
      
      {allVehicleTypes && allVehicleTypes.map((vehicleType: IVehicleType) => (
        <VehicleTypeCard
          key={vehicleType.id}
          vehicleType={vehicleType}
          styles={styles}
          handleDeleteVehicleType={handleDeleteVehicleType}
          setEditingAddOnId={setEditingAddOnId}
        />
      ))}
    </div>
  );
}

export default VehicleTypeList;
