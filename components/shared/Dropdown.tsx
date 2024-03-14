import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	// AlertDialogFooter,
	// AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
// import { Input } from "../ui/input";
import {
	createCategory,
	getAllCategories,
} from "@/lib/actions/category.actions";

const Dropdown = () => {
	return <div>Dropdown</div>;
};

export default Dropdown;
