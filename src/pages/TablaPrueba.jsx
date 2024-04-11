import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

function TablaPrueba() {
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
            FechaContrato: "2024-04-10",
            TipoInstalación: "Instalación X",
            TipoContrato: "Contrato Y",
            VersiónContrato: "Versión 1.0",
            Estatus: "Activo"
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

    const [records, setRecords] = useState(data);
    const [expandedRows, setExpandedRows] = useState([]);

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
        },
        {
            name: 'Accion',
            selector: row => row.accion
        },
    ];

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        const filteredRecords = data.filter(record => {
            return record.nombre.toLowerCase().includes(value);
        });
        setRecords(filteredRecords);
    };

    const subColumns = [
        {
            name: 'Fecha de Contrato',
            selector: row => row.FechaContrato
        },
        {
            name: 'Tipo de Instalacion',
            selector: row => row.TipoInstalación
        },
        {
            name: 'Tipo de Contrato',
            selector: row => row.TipoContrato
        },
        {
            name: 'Version de contrato',
            selector: row => row.VersiónContrato
        },
        {
            name: 'Estatus',
            selector: row => row.Estatus
        },
    ];

    const toggleRowExpansion = (rowId) => {
        if (expandedRows.includes(rowId)) {
            setExpandedRows(expandedRows.filter(id => id !== rowId));
        } else {
            if (expandedRows.length >= 2) {
                const rowsToCollapse = expandedRows.slice(0, expandedRows.length - 1);
                setExpandedRows([...rowsToCollapse, rowId]);
            } else {
                setExpandedRows([...expandedRows, rowId]);
            }
        }
    };

    const expandableRowsComponent = ({ data, onRowExpandToggled }) => {
        return (
            <DataTable
                columns={subColumns}
                data={[data]}
                defaultSortField="id"
                defaultSortAsc={false}
                pagination={false}
            />
        );
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <DataTable
                title="Lista de Enlaces"
                columns={columns}
                data={records}
                pagination
                highlightOnHover
                expandableRows
                expandableRowsComponent={expandableRowsComponent}
                onRowExpandToggled={(data) => toggleRowExpansion(data.id)}
                expandableRowExpanded={(data) => expandedRows.includes(data.id)}
            />
        </div>
    );
};

export default TablaPrueba;
