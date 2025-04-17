'use client'

import { useCreateServiceOptions } from '@/app/_requests/services';
import { IService } from '@/types';
import { DefaultError, useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';


interface IServiceAddProps {
    styles: Record<string, string>;
}

function ServiceAdd({ styles }: IServiceAddProps) {
    const queryClient = useQueryClient(); // ✅ React Query Client
    const [editingService, setEditingService] = useState<Partial<IService>>({});

    // ✅ UseMutation for creating a service
    const createServiceMutation = useMutation<unknown, DefaultError, FormData>(useCreateServiceOptions(queryClient));



    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget; // ✅ Correctly reference the form element
        const formData = new FormData(form);
        createServiceMutation.mutate(formData); // ✅ Call the mutation
        form.reset(); // Optional: Reset the form after submission
    };

    // const handleUpdate = async () => {
    //     if (!editingService) return;
    //     // const updatedService = await updateService(editingService.id, editingService);
    //     // setServices(services.map(s => s.id === updatedService.id ? updatedService : s));
    //     // setEditingService(null);
    // };


    return (
        <form className={`card ${styles.formCard}`} onSubmit={handleCreate}>
            <div className="card-body">
                <h5 className="card-title">{editingService ? 'Edit Service' : 'Add New Service'}</h5>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Title"
                    name="title"
                />
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Price"
                    name="price"
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Duration"
                    name="duration"
                />
                <textarea
                    className="form-control mb-2"
                    placeholder="Description"
                    name="description"
                />
                <button
                    className="btn btn-primary"
                   type='submit'
                >
                    {/* {editingService ? 'Update' : 'Create'} */}
                    Create
                </button>
                {editingService && (
                    <button className="btn btn-danger ms-2" onClick={() => setEditingService({})}>Cancel</button>
                )}
            </div>
        </form>
    )
}

export default ServiceAdd