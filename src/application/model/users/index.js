// --- endpoint
import ENDPOINT from "infrastructure/api/endPoint";
import httpRequest from "infrastructure/api/httpRequest";

const userEndPoint = ENDPOINT.USERS;

export const useUser = () => {
  httpRequest({
    method: "get",
    url: userEndPoint,
  });
};
