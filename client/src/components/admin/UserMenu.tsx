'use client'

import { useSignoutOptions } from '@/app/_requests/auth';
import { DefaultError, useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

interface IUserMenuProps{
    className?: string;
}

function UserMenu({ className = "" }: IUserMenuProps) {

    const signoutMutation = useMutation<unknown, DefaultError>(useSignoutOptions());

    const handleSignout=(e: React.SyntheticEvent) =>{
        e.preventDefault();
        signoutMutation.mutate();
        
    }

    return (
        <div className={`dropdown mt-auto ${className}`}>
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <Image src="/logo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" onClick={handleSignout}>Sign out</a></li>
                
            </ul>
        </div>
    )
}

export default UserMenu;