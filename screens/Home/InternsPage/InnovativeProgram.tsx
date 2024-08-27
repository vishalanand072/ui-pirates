"use client";
import React from "react";
export default function InnovativeProgram() {
  return (
    <>
      <p className="medium-heading text-white text-center px-12 max-md:px-0">
        Join our internship program and gain hands-on experience in product
        design and development.
      </p>
      <div className="flex justify-center items-center flex-row gap-4 mt-8">
        <div className="button-container-1-rev animate__animated animate__fadeInUp-rev animate__slow animate__delay-4s">
          <span className="mas-rev text-nowrap">Join Now!</span>
          <button id="work" type="button" name="Hover" className="text-nowrap">
            Join Now!
          </button>
        </div>
        <div className="button-container-1 animate__animated animate__fadeInUp animate__slow animate__delay-4s">
          <span className="mas text-nowrap">Learn More</span>
          <button id="work" type="button" name="Hover" className="text-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
