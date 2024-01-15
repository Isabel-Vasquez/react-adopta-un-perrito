// src/components/Tags.jsx
import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ textBadge, colorBadge }) => {
	return (
		<Badge bg={colorBadge} className="m-1 my-tags">
			{textBadge}
		</Badge>
	);
};

export default Tags;
