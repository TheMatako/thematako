+++
title = "IPLS"
description = "A hardened, reproducible Arch-based distribution that bridges Red Team and Blue Team workflows for cybersecurity students. Built with Raphaël Verginelli."
date = 2026-10-28

[extra]
repo = "https://github.com/TheMatako/IPLS"
full_name = "ISIMA Purple Linux System"

[[extra.status]]
state = "done"
text = "Repository governance and DevSecOps hygiene: CI/CD, Dependabot, branch rulesets, security and contribution policies."
[[extra.status]]
state = "next"
text = "Archiso pipeline: automated ISO builds and GitHub release generation on tagged version."
[[extra.status]]
state = "next"
text = "Security baseline audit: comparative audit between stock Arch Linux and the linux-hardened kernel."
[[extra.status]]
state = "planned"
text = "System hardening aligned with ANSSI-BP-028 recommendations and CIS Benchmarks."
[[extra.status]]
state = "planned"
text = "Curations of core purple teaming tooling in packages.x86_64 and in-houste technical documentation"
+++

## Why it exists

IPLS is an engineering project at ISIMA designed to build a minimal, reproducible Arch Linux system for networking and cybersecurity labs. Usable by both offensive and defensive roles. Every architectural and security decision is explicitly documented rather than left implicit.

## Four pillars

- **Zero-trust hardening:** Minimal base installation with a reduced attack surface, a hardened kernel, and restrictive default network filtering.
- **Tailored for cyber labs:** Tool selection and default configs are optimized specifically for hands-on student lab environments. 
- **Automated DevSecOps pipeline:** Reproducible ISO generation driven entirely by automated CI/CD builds and releases.
- **IaC, DaC, and CaC:** Build around three core practices: Infrastructure-as-Code for environment reproducibility, Doc-as-Code for transparent technical specifications, and Compliance-as-Code to programmatically validate hardening baselines against established standards.

## Network constraint & lab architecture

The local testing environment runs an Arch VM on a Proxmox VE hypervisor. Because the lab must operate identically across varied and constrained environments, from dual-NAT setups behind home Wi-Fi tethering to enterprise routing on an academic Cisco 881 topology, the subnet addressing and routing were engineered to make the hypervisor environment fully portable without manual reconfiguration. Detailed network topology is documented in the repository.

## What comes next

The immediate milestone is establishing a security baseline audit on a bare Arch ISO before applying any hardening. This will provide quantitative point of comparison for every subsequent kernel parameter, sysctl tweak, and access rule.

Built with [Raphaël Verginelli](https://github.com/RaphaelVerginelli).

