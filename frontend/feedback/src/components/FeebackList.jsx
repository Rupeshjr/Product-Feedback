//FeedbackList.jsx
import React, { useEffect, useState } from "react";
import FeedbackFilters from "./FeedbackFilters";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
    const [feedbackItems, setFeedbackItems] = useState([]);
    const [filterData, setFilterData] = useState({
        status: '',
        category: '',
        sort: '',
      });
    
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSortChange = (e) => {
        
    };

  const fetchFeedbacks = async () => {
    try {
        const queryString = new URLSearchParams(filterData).toString();
        const response = await fetch(`http://localhost:3000/api/feedbacks?${queryString}`);
        if (!response.ok) {
          throw new Error("Failed to fetch feedback");
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks); // assuming { feedbacks: [...] }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
  }

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, [filterData]);


  const handleUpvote = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/feedbacks/${id}/upvote`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Upvote request failed");
      }

      console.log("Feedback upvoted successfully");
    } catch (error) {
      console.error("Error upvoting feedback:", error);
    }
  };

  return (
    <div>
      <FeedbackFilters filterData={filterData} handleFilterChange={handleFilterChange} />
      <div className="feedback-list">
        {feedbackItems.map((item) => (
          <FeedbackItem
            key={item._id}
            item={item}
            handleUpVote={handleUpvote}
          />
        ))}
      </div>
    </div>
  );
}
