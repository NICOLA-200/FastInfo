/* eslint-disable no-unused-vars */
import React from "react";
import {
  Navbar,
  Header,
  GetToKnow,
  Footer,
  AdvClients,
  ForClients,
  AdvServiceProviders,
  ForServiceProviders,
  ServiceRegistration,
} from "../../components";

import { useCountStore } from '../../store';



const Dashboard = () => {
  const count =  useCountStore((state) => state.count)
  const   increment =  useCountStore((state) => state.increment)
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Navbar />
      <Header />
      <ServiceRegistration />
      <ForServiceProviders />
      <AdvServiceProviders />
      <ForClients />
      <AdvClients />
      <GetToKnow />
      <Footer /> 
    </div>
  );
};

export default Dashboard;
