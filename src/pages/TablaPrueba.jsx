import React from "react";
import DataTable from 'react-data-table-component';
import {useState} from "react";


function TablaPrueba () {

    const data = [
        {
            id: 1,
            nombre: 'Nombre1',
            correo: 'correo1@example.com',
            telefono: '123456789',
            dependencia: 'Dependencia 1',
            direccion: 'Direccion 1',
            adscripcion: 'Adscripcion 1',
            cargo: 'Cargo 1',
            accion: 'Activo',
        },
        {
            id: 2,
            nombre: 'Nombre2',
            correo: 'correo2@example.com',
            telefono: '987654321',
            dependencia: 'Dependencia 2',
            direccion: 'Direccion 2',
            adscripcion: 'Adscripcion 2',
            cargo: 'Cargo 2',
            accion: 'Inactivo',
        },
        {
            id: 3,
            nombre: 'Nombre3',
            correo: 'correo3@example.com',
            telefono: '567890123',
            dependencia: 'Dependencia 3',
            direccion: 'Direccion 3',
            adscripcion: 'Adscripcion 3',
            cargo: 'Cargo 3',
            accion: 'Activo',
        },
    ];


    const [records, setRecords]= useState(data)

    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true
        },
        {
            name: 'Correo',
            selector: row => row.correo
        },
        {
            name: 'Telefono',
            selector: row => row.telefono
        },
        {
            name: 'Dependencia',
            selector: row => row.dependencia
        },
        {
            name: 'Direccion',
            selector: row => row.direccion
        },
        {
            name: 'Adscripcion',
            selector: row => row.adscripcion
        },
        {
            name: 'Cargo',
            selector: row => row.cargo
        },{
            name: 'Accion',
            selector: row => row.accion
        },
    ];



    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        const filteredRecords = data.filter(record => {
            return record.title.toLowerCase().includes(value);
        });
        setRecords(filteredRecords);
    };

    const subColumns = [
        {
            name: 'Género',
            selector: row => row.genre
        },
        {
            name: 'Director',
            selector: row => row.director
        },
    ];

    const expandableRowsComponent = ({ data }) => (
        <DataTable
            columns={subColumns}
            data={[data]}
            defaultSortField="id"
            defaultSortAsc={false}
            pagination={false}
        />
    );

    return (
        <div>
            <input type="text"
                   onChange={handleChange}
            />
            <DataTable
                title="Películas"
                columns={columns}
                data={records}
                pagination
                highlightOnHover
                expandableRows
                expandableRowsComponent={expandableRowsComponent}
            />
        </div>
    );
};

export default TablaPrueba;
