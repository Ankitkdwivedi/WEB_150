import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export function CardT({ data }) {
  // Map the icon name to the actual icon component
  const iconMap = {
    BanknotesIcon,
    UserPlusIcon,
    UsersIcon,
    ChartBarIcon,
  };

  const IconComponent = iconMap[data.icon]; // Get the corresponding icon component

  return (
    <Card className="border border-blue-gray-100 shadow-sm">
      <CardHeader
        variant="gradient"
        color={data.color}
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center"
      >
        <IconComponent /> {/* Render the icon component */}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
          {data.title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {data.value}
        </Typography>
      </CardBody>
      {data.footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          <Typography color={data.footer.color}>
            {data.footer.value} {data.footer.label}
          </Typography>
        </CardFooter>
      )}
    </Card>
  );
}

CardT.defaultProps = {
  color: "blue",
  footer: null,
};

CardT.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  data: PropTypes.shape({
    color: PropTypes.string,
    icon: PropTypes.oneOf(["BanknotesIcon", "UserPlusIcon", "UsersIcon", "ChartBarIcon"]).isRequired, // Specify the available icons
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    footer: PropTypes.shape({
      color: PropTypes.string,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CardT;
