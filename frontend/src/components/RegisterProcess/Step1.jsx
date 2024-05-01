import React from "react";
import ModalWrapper from "./ModalWrapper";

function Step1({
  service_provider,
  type_service,
  provider_description,
  updateFields,
}) {
  return (
    <ModalWrapper title="About">
      <input
        type="text"
        className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[170px] py-5 border-b-2 border-neutral-400"
        placeholder="service provider name"
        value={service_provider}
        onChange={(e) => updateFields({ service_provider: e.target.value })}
      />

      <select
        name="type_service"
        id="type_service"
        // value="Type of service"
        value={type_service}
        onChange={(e) => {
          console.log(e.target.value);
          updateFields({ type_service: e.target.value });
        }}
        className="appearance-none bg-gray-100 w-[200px] border  border-gray-300 text-gray-700 py-2 px-5 h-[40px] pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="Type of service">provider category</option>
        <option value="Education">Education</option>
        <option value="Health">Health care</option>
        <option value="Government">Government Agency</option>
        <option value="rental">Rental</option>
        <option value="Financial">Financial service</option>

        <option value="market">Market</option>
        <option value="transport">Transport</option>
        <option value="leisure">Leisure </option>
        <option value="companies">companies</option>
        <option value="stadium ">stadium</option>
        <option value="district">District</option>
      </select>

      <textarea
        name=""
        placeholder="description"
        value={provider_description}
        onChange={(e) => updateFields({ provider_description: e.target.value })}
        id=""
        cols="30"
        rows="10"
        className="w-[80%] focus:border-blue-900 h-[100px] p-2 border-[1px] overflow-auto border-neutral-400 rounded-md"
      ></textarea>
    </ModalWrapper>
  );
}

export default Step1;
