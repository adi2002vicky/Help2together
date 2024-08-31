//SPDX-License-Identifier: UNLICENSED
pragma solidity >0.7.0 <= 0.9.0;

contract Help_together_store{
    address[] public deployedCampaigns;

    event help_together_event(
        string event_title,
        string indexed category,
        string img_link,
        address indexed creater,
        address campaignAddress,
        uint indexed timestamp,
        uint event_requiredamount
    );

    function createCampaign(
        string memory store_fund_title , 
        string memory store_story,
        string memory store_image,
        string memory store_category,
        uint store_amount_required)public{
        Help_together fundrise_campaign = new Help_together(store_fund_title, 
        store_story, store_image, store_amount_required,msg.sender);
        deployedCampaigns.push(address(fundrise_campaign));

        emit help_together_event(store_fund_title, 
        store_category,
        store_image,
        msg.sender ,
        address(fundrise_campaign) ,
        block.timestamp ,
        store_amount_required);
    }
}
contract Help_together{
   string public fund_title;
   string  public story;
   string public image;
   uint public amount_required;
   uint public total_amount_received;
   address payable public creater;
  
  event fund_donated_event(address indexed donar , uint indexed amount , uint  indexed timestamp);
   constructor(
       string memory title_fund,
       string memory story_link,
       string memory img_link,
       uint required_amount,
       address campaignOwner ){
        creater = payable(campaignOwner);
        fund_title=title_fund;
        story=story_link;
        image=img_link;
        amount_required=required_amount;

        }

    function fund_donate()public payable {
        require(amount_required > total_amount_received, 
        "total required amount is fullfilled thankyou");
        creater.transfer(msg.value);
        total_amount_received= total_amount_received+msg.value;
        emit fund_donated_event(msg.sender, msg.value , block.timestamp);
    }
}