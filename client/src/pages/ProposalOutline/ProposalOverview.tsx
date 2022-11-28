import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Web3File } from "web3.storage";
import useProposals from "../../hooks/web3/useProposals";
import useWeb3Storage from "../../hooks/web3/useWeb3Storage";

const ProposalOverview = () => {
  const [file, setFile] = useState("");

  const { proposals } = useProposals();

  const { projectID } = useParams();

  const client = useWeb3Storage();

  useEffect(() => {
    if (!proposals || !client) return;

    const proposalFound = proposals.find(
      (proposal) => proposal.id.toString() === projectID
    );

    if (!proposalFound) return;

    (async () => {
      try {
        // const res = await client.get(proposalFound.researchCid); // Promise<Web3Response | null>
        // console.log(proposalFound.researchCid);
        // if (!res) return;
        const file = await fetch(
          `https://${proposalFound.researchCid}.ipfs.w3s.link/`
        );
        console.log(file, "is file");
        // const files = await res.files(); // Promise<Web3File[]>

        setFile(file.url);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [proposals, client, projectID]);

  return (
    <div className="container tab-content proposal-overview">
      <object width="100%" height="900" data={file} type="application/pdf">
        {" "}
      </object>
    </div>
  );
};

export default ProposalOverview;
