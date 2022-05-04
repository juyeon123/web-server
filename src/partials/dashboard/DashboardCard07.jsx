import React, { useState, useEffect} from 'react';
import axios from 'axios';

function DashboardCard07() {
  // photos, setPhotos 비구조화 할당
  // let [data, setData] = useState({cluster : [], db : [], node :[]});
  let [data, setData] = useState({cluster : []});
  // const [data, setData] = useState();
  // let [data, setData] = useState([]);
  // let [clusters, setCluster] = useState([{name : String, vpc : String, subnet : String, zone : String, version : String, curr_node_count : Number, cluster_cidr : String, endpoint : String, status : String}]);
  const [clusters, setCluster] = useState();
  // const [dbs, setDb] = useState([]);
  // const [nodes, setNode] = useState([]);

 // const BOARD_API_BASE_URL = "http://192.168.10.3:8080/cluster"; 
   const BOARD_API_BASE_URL = "http://34.64.123.83:80/cluster";
  // const BOARD_API_BASE_URL = "http://localhost:80/cluster";

  useEffect(() => {
    if(data){
      setCluster(data.cluster);
    }
  }, [data]);

useEffect(async() => {
    const result = await axios.get(BOARD_API_BASE_URL);
    setData(result.data);
}, []);

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Kubernetes Engine</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-center">Cluster Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Location</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">GKE Master Version</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Current Node</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">VPC</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Subnet</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Cluster pod address range</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">EndPoint</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {
                /* Row */
                clusters ? clusters.map( (cluster, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-2" >
                        <div className="text-center text-green-500" >{cluster.name}</div>
                      </td>
                      <td className="p-2" >
                        <div className="text-center" >{cluster.zone}</div>
                      </td>
                      <td className="p-2" >
                        <div className="text-center" >{cluster.version}</div>
                      </td>
                      <td className="p-2" >
                        <div className="text-center" >{cluster.curr_node_count}</div>
                      </td>
                      <td className="p-2" >
                        <div className="text-center text-sky-500" >{cluster.vpc}</div>
                      </td>
                      <td className="p-2" >
                        <div className="text-center text-sky-500" >{cluster.subnet}</div>
                      </td>
                      <td className="p-2" >
                        <div className="text-center" >{cluster.cluster_cidr}</div>
                      </td>
                      <td className="p-2" >
                        <div className="text-center text-sky-500" >{cluster.endpoint}</div>
                      </td>
                      <td className="p-2" >
                        <div className="text-center text-green-500" >{cluster.status}</div>
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

export default DashboardCard07;
