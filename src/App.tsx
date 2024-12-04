import {
  Button,
  getKeyValue, Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";

const rows = [
  {
    key: "1",
    name: "Create a new design",
    description: "Design should be pixel perfect",
    status: "Active",
  },
  {
    key: "2",
    name: "Build a new website",
    description: "Website should be responsive",
    status: "Paused",
  },
  {
    key: "3",
    name: "Prepare the release",
    description: "Release preparation should be done",
    status: "Active",
  },
  {
    key: "4",
    name: "Release the product",
    description: "Product should be released on 15th of March",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "description",
    label: "DESCRIPTION",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <body className="min-h-screen flex flex-col items-center justify-center bg-default-50 ">
      <div className="container">
        <h1 className="text-center mb-8">Wish Manager</h1>
        <Table removeWrapper aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Button
        isIconOnly
        size="lg"
        color="primary"
        startContent={<FaPlus />}
        className="absolute right-8 bottom-8"
        onClick={onOpen}
      ></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new wish
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 gap-4">
                <Input label="Title" />
                <Input label="Description" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </body>
  );
}

export default App;
