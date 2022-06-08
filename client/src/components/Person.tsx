import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Person = () => {
  const params = useParams();
  const name = params.name;
  const PERSON_QUERY = gql` 
        {
      person(name: "${name}") {
        name
        height
        mass
        url
        count
      }
    }
      
    `;

  const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";
  const getCharacterId = (url: string) => {
    const arr = url.split("/");
    console.log(arr);
    return arr[arr.length - 2];
  };
  const { loading, error, data } = useQuery(PERSON_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let person = data.person;
  console.log(person.name);
  return (
    <div className="content ">
      <div className="card py-3 mb-5">
        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
          <div className="symbol symbol-65px symbol-circle mb-5">
            <img src={`${imgUrl}${getCharacterId(person.url)}.jpg`} alt="" />
            <div className="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
          </div>
          <a
            href="/"
            className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >
            {person.name}
          </a>
          <div className="fw-bold text-gray-400 mb-6">{person.height}</div>
          <div className="d-flex flex-center flex-wrap">
            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bolder text-gray-700">{person.mass}</div>
              <div className="fw-bold text-gray-400">weight</div>
            </div>
            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bolder text-gray-700">
                {person.gender}
              </div>
              <div className="fw-bold text-gray-400">Gender</div>
            </div>
            <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
              <div className="fs-6 fw-bolder text-gray-700">
                {person.homeworld}
              </div>
              <div className="fw-bold text-gray-400">Home world</div>
            </div>
          </div>
        </div>
        <Link
          className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary"
          to={`/person/${person.name}`}
        >
          <span className="svg-icon svg-icon-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect
                  x="5"
                  y="5"
                  width="5"
                  height="5"
                  rx="1"
                  fill="currentColor"
                ></rect>
                <rect
                  x="14"
                  y="5"
                  width="5"
                  height="5"
                  rx="1"
                  fill="currentColor"
                  opacity="0.3"
                ></rect>
                <rect
                  x="5"
                  y="14"
                  width="5"
                  height="5"
                  rx="1"
                  fill="currentColor"
                  opacity="0.3"
                ></rect>
                <rect
                  x="14"
                  y="14"
                  width="5"
                  height="5"
                  rx="1"
                  fill="currentColor"
                  opacity="0.3"
                ></rect>
              </g>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};
