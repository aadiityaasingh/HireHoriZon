import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector((store) => store.company);
  const [filterCompany, setFilterCompany] = useState()
  const navigate = useNavigate();

  useEffect(() =>{
    const filteredCompany = companies?.length >= 0 && companies.filter((company) =>{
        if(!searchCompanyByText){
            return true
        };
        return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany)

  },[companies, searchCompanyByText])
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
          {Array.isArray(filterCompany) && filterCompany.map((company) => (

            <tr>
              <TableCell>
                <Avatar>
                  <AvatarImage src={company?.logo } />
                </Avatar>
              </TableCell>
              <TableCell className="cursor-pointer">{company.name}</TableCell>
              <TableCell className="cursor-pointer">
                {company.createdAt.split("T")[0]}{" "}
              </TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-33">
                    <div onClick={() =>navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit">
                      <Edit2 className="w-4 cursor-pointer" />
                      <span className="cursor-pointer">Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
