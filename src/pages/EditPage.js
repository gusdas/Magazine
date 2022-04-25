import React from 'react';
import EditTemplate from '../templates/EditTemplate';

function EditPage(props) {
  return (
    <React.Fragment>
      <EditTemplate></EditTemplate>
    </React.Fragment>
  );
}

// export default EditPage;
export default React.memo(EditPage);
