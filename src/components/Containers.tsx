"use client";

import { Container } from "react-bootstrap";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
export default function Containers({ children, className }: ContainerProps) {
  return <Container className={className}>{children}</Container>;
}
