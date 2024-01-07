import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2 className="my-3">About 100x Training</h2>
        </div>
        <div
          className="p-4 rounded-4"
          style={{ background: "linear-gradient(to right, #ffd3e2, #ffb6c1)" }}
        >
          <div>
            <p>Welcome to 100xdevs.</p>
            <br />
            <p>
              This is an initiative by <b>Shreyash Pawar</b> to personally
              mentor folks in the field of Programming.
            </p>
            <br />
            <p>
              Shreyash strongly feels that today you are either a 1x engineer or
              a 100x engineer and nothing in the middle, and his hope is to take
              everyone in this community to be a <b>100x Engineer</b>.
            </p>
            <br />
            <p>
              Join him in his first course on Full Stack development with a
              heavy focus on Open source projects to learn programming
              practically.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
