import Button from 'react-bootstrap/Button';
import React from 'react';

class RemoveBuilding extends React.Component {
	render() {
        const { removeBuilding } = this.props;
        return <Button variant="danger"
        onClick={() => removeBuilding()}
        >
            Remove Selected Building
        </Button>
	}
}
export default RemoveBuilding;