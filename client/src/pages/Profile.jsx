import React, {useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Profile = () => {
  const [isLoading, setIsLoading ] = useState(false);
  const [campaigns, setCampaigns] = useState([]); /* campaigns used in state because we will fetch them from smart constract */
  
  
  const { address, contract, getUserCampaigns } =
  useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns(); /* getUserCampaigns filter out all other campaign except campaign created by user itself */
    setCampaigns(data);
    setIsLoading(false);
    
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

    return (
    <DisplayCampaigns
    title="All Campaigns"
    isLoading={isLoading}
    campaigns={campaigns}
    />
  )
}

export default Profile
