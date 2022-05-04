import React, { useState, useEffect} from 'react';
import axios from 'axios';

function DashboardCard10() {
  let [data, setData] = useState({db : []});
  const [dbs, setDb] = useState([]);
  
  const BOARD_API_BASE_URL = "http://34.64.123.83:80/db"; 

  useEffect(() => {
    if(data){
      setDb(data.db);
    }
  }, [data]);

  useEffect(async() => {
      const result = await axios.get(BOARD_API_BASE_URL);
      setData(result.data);
  }, []);

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Cloud SQL (MySQL)</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">DB Version</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Location</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Private IP</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">CPU</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Memory</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Disk Size</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
            {
                /* Row */
                dbs ? dbs.map( (db, index) => {
                  return (
                    <tr key={index}>
                    <td className="p-2">
                      <div className="text-center text-green-500" >{db.name}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{db.version}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{db.location}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{db.public_ip}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">{db.cpu}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-sky-500">{db.mem}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{db.storage}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center text-green-500">{db.status}</div>
                    </td>
                  </tr>
                  )
                }
                ) : <tr>
                      <td className="p-2">
                        <div className="text-center text-green-500" key="1">데이터가 존재하지 않습니다.</div>
                      </td>
                   </tr>
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
