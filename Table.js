import React, { useState } from "react";

export default function Table({ columns = [], values = [] }) {

    const [searchTerm, setSearchTerm] = useState('');

    function renderTrItem(item) {
        return item.map((i, index) => <td key={index}>{i}</td>)
    }

    function filterValues(values) {
        //[1, "Gosho", 27] - item
        //"gOsho" => "gosho" - toLowerCase
        return values.filter( item => 
            item.some( i => i.toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ))
    }

    return (
        <>
            <div className="row">
                <div className="col-12 mb-3">
                    <label className="fw-bold">Search</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                {columns.map((c, index) => <th key={index}>{c}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {filterValues(values).map((v, index) => <tr>{renderTrItem(v)}</tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}