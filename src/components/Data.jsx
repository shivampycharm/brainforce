import React, { useState, useEffect } from "react";

import "./../Style/data.css";

function Data() {
  const [data, getData] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [selectedLandings, setSelectedLandings] = useState();
  const [selectedType, setSelectedType] = useState();

  const URL = "https://api.spacexdata.com/v3/capsules";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        // console.log(response);
        getData(response);
      });
  };

  const handleSelectChange = (e) => {
    // console.log(e.target.value);
    setSelectedId(e.target.value);
  };

  const handleSelect2Change = (e) => {
    // console.log(e.target.value);
    setSelectedLandings(e.target.value);
  };

  const handleSelect3Change = (e) => {
    // console.log(e.target.value);
    setSelectedType(e.target.value);
  };

  return (
    <div>
      <section className="filter">
        <h2>Display Capsules by Filtering </h2>
        <form id="data"></form>

        <div className="options">
          <div>
            <select
              name="status"
              id="status"
              form="data"
              onChange={handleSelectChange}
            >
              <option value={null}>Status</option>
              <option value="Active">Active</option>
              <option value="Retired">Retired</option>
              <option value="Unknown">Unknown</option>
              <option value="Destroyed">Destroyed</option>
            </select>
          </div>

          <div>
            <select
              name="landing"
              id="landing"
              form="data"
              onChange={handleSelect2Change}
            >
              <option value={null}>Landing</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div>
            <select
              name="type"
              id="type"
              form="data"
              onChange={handleSelect3Change}
            >
              <option value={null}>Type</option>
              <option value="Dragon 1.0">Dragon 1.0</option>
              <option value="Dragon 1.1">Dragon 1.1</option>
              <option value="Dragon 2.0">Dragon 2.0</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        {!data ? (
          "No data found."
        ) : (
          <table>
            <thead>
              <tr>
                <th>Serial</th>
                <th>Id</th>
                <th>Status</th>
                <th>Original launch</th>
                <th>Original launch Unix</th>
                <th>Missions</th>
                <th>Landings</th>
                <th>Type</th>
                <th>Details</th>
                <th>Reuse count</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((value) => {
                  if (selectedId && selectedLandings && selectedType) {
                    return (
                      value.status === selectedId &&
                      Number(value.landing) === Number(selectedLandings) &&
                      value.type === selectedType
                    );
                  } else if (selectedLandings && selectedType) {
                    return (
                      value.landing === selectedLandings &&
                      value.type === selectedType
                    );
                  } else if (selectedId && selectedType) {
                    return (
                      value.status === selectedId && value.type === selectedType
                    );
                  } else if (selectedId && selectedLandings) {
                    return (
                      value.status === selectedId &&
                      value.landings === selectedLandings
                    );
                  } else if (selectedId) {
                    return value.status === selectedId;
                  } else if (selectedLandings) {
                    return Number(value.landing) === Number(selectedLandings);
                  } else if (selectedType) {
                    return value.type === selectedType;
                  } else {
                    return true;
                  }
                })
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.capsule_serial}</td>
                      <td>{item.capsule_id}</td>
                      <td>{item.status}</td>
                      <td>{item.original_launch}</td>
                      <td>{item.original_launch_unix}</td>
                      <td>
                        {item.missions.length === 0 ? (
                          ""
                        ) : (
                          <table>
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Flight</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.missions.map((i, idx) => {
                                return (
                                  <tr key={idx}>
                                    <td>{i.name}</td>
                                    <td>{i.flight}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        )}
                      </td>
                      <td>{item.landings}</td>
                      <td>{item.type}</td>
                      <td>{item.details}</td>
                      <td>{item.reuse_count}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

export default Data;
