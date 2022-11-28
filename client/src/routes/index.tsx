import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import IpNfts from "../pages/IPNFTS";
import IpNftSingular from "../pages/IPNFTS/IpNftSingular";
import OnGoingProject from "../pages/OnGoingProject";
import CreateRequest from "../pages/P2PFunding/CreateRequest";
import FundingRequests from "../pages/P2PFunding/FundingRequests";
import OnGoingRequests from "../pages/P2PFunding/OnGoingRequests";
import ResearchRequests from "../pages/P2PFunding/ResearchRequests";
import ProposalOutline from "../pages/ProposalOutline";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/ipnfts" element={<IpNfts />} />
    <Route path="/ipnfts/:ipnftID" element={<IpNftSingular />} />
    <Route path="/funding-requests" element={<FundingRequests />} />
    <Route path="/research-requests" element={<ResearchRequests />} />
    <Route path="/ongoing-requests" element={<OnGoingRequests />} />
    <Route path="/create-request/:requestType" element={<CreateRequest />} />
    <Route path="/ongoing-project/:projectID" element={<OnGoingProject />} />
    <Route path="/proposal-outline/:projectID" element={<ProposalOutline />} />
    <Route path="*" element={<Navigate to={"/"} replace />} />
  </Routes>
);

export default AppRoutes;
