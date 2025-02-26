import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { InputText } from '../molecules'
import { RiFileExcel2Line } from "react-icons/ri";
import { ButtonForm } from "../atoms";

export default function Table({ data, columns }) {
    const [myData, setMyData] = useState()
    useEffect(() => { setMyData(data); setFilterRecords(data) }, [])
    const [filterRecords, setFilterRecords] = useState(data)
    const customStyles = {
        headRow: {
            style: {
                backgroundColor: '#f9fafb',
                color: '#64748b',
            }
        },
        headCells: {
            style: {
                fontSize: '13px',
                fontWeight: '100',
                textTransform: 'uppercase'
            },
        },
        cells: {
            style: {
                color: '#4b5563',
                fontWeight: '100',
                fontSize: '14px',
            }
        },
        pagination: {
            style: {
                backgroundColor: '#fff',
            },
        },
    }
    console.log(filterRecords)
    const handleChange = (e) => {
        /* const newData = filterRecords.filter(row => {
            return row.nom.toLowerCase().includes(e.target.value.toLowerCase())
                || row.email.toLowerCase().includes(e.target.value.toLowerCase()
                    || row.telephone.toLowerCase().includes(e.target.value.toLowerCase()) 
                )
        }) */
        const newData = filterRecords.filter((row: any) => {
            for (let colonne of row) {
                return row.colonne.toLowerCase().includes(e.target.value.toLowerCase())
            }
        })
        setMyData(newData)
    }
    console.log(myData)
    return (
        <section className="text-gray-800 realitve">
            <div className="w-5/5 flex justify-between align-center items-center">
                <div className="w-3/5">
                    <InputText text='Search  ' type="text" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <ButtonForm color="bg-blue-600" icon={<RiFileExcel2Line />} text='Export en Excel' />
                </div>
            </div>
            <div className="border-2">
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    className=""
                    pagination selectableRows fixedHeader fixedHeaderScrollHeight="700px" highlightOnHover
                />
            </div>
        </section>
    )
}