import Tutor from "./Tutor";

const TutorList = ({ tutors }) => {
  return (
    <>
      {tutors.map((tutor) => (
        <Tutor key={tutor.id} tutor={tutor} />
      ))}
    </>
  );
};

export default TutorList;
