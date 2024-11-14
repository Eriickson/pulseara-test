import React from "react";

import { Box, Button, Dialog } from "@chakra-ui/react";

const AppPage = () => {
  return (
    <Box m="24">
      <Dialog.Root>
        <Dialog.Backdrop />
        <Dialog.Trigger>
          <Button>AppPage</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.CloseTrigger />
          <Dialog.Header>
            <Dialog.Title />
          </Dialog.Header>
          <Dialog.Body />
          <Dialog.Footer />
        </Dialog.Content>
      </Dialog.Root>
    </Box>
  );
};

export default AppPage;
