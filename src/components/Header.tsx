"use client";

import Link from "next/link";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Close, Menu, Phone } from "@mui/icons-material";
import { clinic, navItems } from "@/lib/clinic-data";
import { useClinicStore } from "@/store/useClinicStore";
import Image from "next/image";

export default function Header() {
  const mobileMenuOpen = useClinicStore((state) => state.mobileMenuOpen);
  const openMobileMenu = useClinicStore((state) => state.openMobileMenu);
  const closeMobileMenu = useClinicStore((state) => state.closeMobileMenu);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="section-container flex h-20 items-center justify-between">
        <Link href="#home" className="group flex items-center gap-3">
            <Image src="/assets/images/logo.png" alt="Somosot Dental logo" width={44} height={44} />
          <div>
            <p className="text-base font-black tracking-tight text-slate-950">
              Somosot Dental
            </p>
            <p className="text-xs font-medium text-slate-500">Cebu City</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font700 font-semibold text-slate-600 transition hover:text-cyan-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            component="a"
            href={`tel:${clinic.phone.replaceAll(" ", "")}`}
            variant="outlined"
            startIcon={<Phone />}
          >
            Call Clinic
          </Button>
          <Button component="a" href="#contact" variant="contained">
            Book Appointment
          </Button>
        </div>

        <IconButton
          className="lg:hidden"
          aria-label="Open navigation menu"
          onClick={openMobileMenu}
        >
          <Menu />
        </IconButton>
      </div>

      <Drawer anchor="right" open={mobileMenuOpen} onClose={closeMobileMenu}>
        <div className="w-80 max-w-[85vw] p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-black text-slate-950">Somosot Dental</p>
              <p className="text-sm text-slate-500">Cebu City</p>
            </div>
            <IconButton aria-label="Close navigation menu" onClick={closeMobileMenu}>
              <Close />
            </IconButton>
          </div>

          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.href}
                component="a"
                href={item.href}
                onClick={closeMobileMenu}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>

          <div className="mt-6 grid gap-3">
            <Button
              component="a"
              href={`tel:${clinic.phone.replaceAll(" ", "")}`}
              variant="outlined"
              fullWidth
              startIcon={<Phone />}
            >
              Call Clinic
            </Button>
            <Button
              component="a"
              href="#contact"
              variant="contained"
              fullWidth
              onClick={closeMobileMenu}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </Drawer>
    </header>
  );
}