import { IResponseGetUserAxios } from "./interfaces";

/* eslint-disable max-lines */
export const errorResonse: IResponseGetUserAxios = {
  results: [
    {
      gender: "Error Gender",
      name: {
        title: "Error",
        first: "Error",
        last: "Error",
      },
      location: {
        street: {
          number: 0,
          name: "Error Name",
        },
        city: "Error",
        state: "Error",
        country: "Error",
        postcode: 0,
        coordinates: {
          latitude: "0",
          longitude: "0",
        },
        timezone: {
          offset: "-12:00",
          description: "Error",
        },
      },
      email: "error@error.com",
      login: {
        uuid: "0",
        username: "error",
        password: "error",
        salt: "iLV5hry4",
        md5: "0",
        sha1: "0",
        sha256: "0",
      },
      dob: {
        date: "0",
        age: 0,
      },
      registered: {
        date: "0",
        age: 0,
      },
      phone: "(555)-555-5555",
      cell: "(555)-555-5555",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/36.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
      },
      nat: "TR",
    },
  ],
  info: {
    seed: "34da8fad631c4566",
    results: 1,
    page: 1,
    version: "1.4",
  },
};
