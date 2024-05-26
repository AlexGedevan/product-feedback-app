import styled from "styled-components";

function RoadmapStatus({ status, ItemsTotal, onClick, currentStatus }) {
  return (
    <StyledRoadmapStatus
      onClick={onClick}
      currentStatus={currentStatus}
      status={status}
    >
      {status} ({ItemsTotal})
    </StyledRoadmapStatus>
  );
}

export default RoadmapStatus;

const StyledRoadmapStatus = styled.h2`
  /* font-size: 1.8rem; */
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.601rem;
  letter-spacing: -0.25px;
  color: ${(props) =>
    props.currentStatus === props.status
      ? "#3a4374"
      : "rgba(58, 67, 116, 0.4)"};

  border-bottom: ${(props) =>
    props.currentStatus === props.status ? "4px solid #ad1fea" : ""};
`;
