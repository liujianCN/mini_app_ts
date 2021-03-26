import request from "@/utils/request";

export const getExamLibList = (data) => {
  return request({
    url: "/api/jktk/driverQuestion",
    data,
  });
};
