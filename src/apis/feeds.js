import { apiClient } from "./axios";

export const getFeeds = async () => apiClient.get("/v1/feeds");

export const getUnreadInfo = async () => apiClient.get("/v1/feeds/counters");

export const refreshFeed = async (id) =>
  apiClient.put(`/v1/feeds/${id}/refresh`);

export const refreshAllFeed = async () => apiClient.put("/v1/feeds/refresh");

export const addFeed = async (url, categoryId, isFullText) =>
  apiClient.post("/v1/feeds", {
    feed_url: url,
    category_id: categoryId,
    crawler: isFullText,
  });

export const deleteFeed = async (id) => apiClient.delete(`/v1/feeds/${id}`);

export const updateFeed = async (id, newDetails) => {
  const { url, title, categoryId, hidden, disabled, isFullText } = newDetails;

  return apiClient.put(`/v1/feeds/${id}`, {
    feed_url: url,
    title,
    category_id: categoryId,
    hide_globally: hidden,
    disabled,
    crawler: isFullText,
  });
};

export const markFeedAsRead = async (id) =>
  apiClient.put(`/v1/feeds/${id}/mark-all-as-read`);
