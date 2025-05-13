# Introduction to Linux – Capstone Project

## Overview

This project is designed to provide a foundational understanding of **Linux**, one of the most widely used operating systems in the tech industry. Mastering Linux is essential for careers in:

- DevOps
- Cloud Computing
- Software Development
- Cybersecurity
- Data Analysis/Science
- AI/ML Engineering
- QA/Testing

Through this project, you will:

- Understand what Linux is
- Explore common Linux distributions
- Create and access a cloud-based Linux server
- Use `ssh` to connect to the server remotely
- Perform basic software package management using `apt` or `yum`

---

## What Is Linux?

**Linux** is a free, open-source operating system used for servers, supercomputers, mobile devices, and more. Unlike Windows or macOS, Linux is highly customizable and secure. It powers most of the internet's infrastructure and is supported by a global community of developers.

---

## Linux Distributions (Distros)

Linux distros are variations of the Linux OS built using the Linux kernel and bundled with system software and package managers. Here are some common ones:

### Ubuntu
- Best for beginners
- Comes in desktop and server editions
- Ideal for web hosting, development, and cloud deployment

### CentOS
- Enterprise-focused
- Free version of Red Hat Enterprise Linux (RHEL)
- Great for production server environments

### Debian
- Focuses on free and open-source software
- Very stable and supports multiple hardware architectures

### Fedora
- Bleeding-edge distro with latest software
- Often used as a testing ground for RHEL

---

## Setting Up a Cloud-Based Linux Server

We use **AWS (Amazon Web Services)** to create and manage a Linux server using EC2 (Elastic Compute Cloud).

### Steps:

1. Sign up at [aws.amazon.com](https://aws.amazon.com)
2. Go to the EC2 dashboard
3. Click **Launch Instance**
4. Select **Ubuntu Server 20.04 LTS (Free tier eligible)**
5. Choose a **t2.micro** instance type
6. Generate and download a **.pem** key file (e.g., `ubuntu.pem`)
7. Launch the instance

*Screenshot: AWS EC2 instance launched*
![AWS EC2 instance launched](./assets/instance_launch1.png)
![AWS EC2 instance launched](./assets/instance_launch2.png)]

---

## Connecting to Your Server (Using SSH)

### Requirements

#### Windows
- Use **MobaXterm** or **Git Bash**
- (Alternative: PuTTY, PowerShell)

#### macOS
- Use the built-in **Terminal**

### Steps

1. Open your terminal
2. Navigate to the directory with your PEM key:

```bash
cd ~/Downloads
````

3. Change permissions on the key:

```bash
chmod 400 key.pem
```

4. Extract the **public IP address** of your EC2 instance from the AWS dashboard
5. Connect using SSH:

```bash
ssh -i ubuntu.pem ubuntu@<your-public-ip>
```

*Screenshot: Successful SSH login with `welcome to Ubuntu` banner*
![Connection to Virtual Machine Instance](./assets/virtual_machine_connection.png)

---

## Using Package Managers (apt/yum)

Package managers help you install, update, and remove software on Linux.

### 🧪 Examples:

#### Ubuntu/Debian (APT):

```bash
sudo apt update               # Refresh package list
sudo apt install nginx        # Install NGINX web server
sudo apt remove nginx         # Remove NGINX
```

#### CentOS/RHEL (YUM):

```bash
sudo yum update
sudo yum install httpd
sudo yum remove httpd
```

*Screenshot: Installing NGINX or Apache with `apt` or `yum`*
![Updates and Installations](./assets/update&installation1.png)
![Updates and Installations](./assets/update&installation2.png)
![Updates and Installations](./assets/update&installation3.png)
![Updates and Installations](./assets/update&installation4.png)
![Updates and Installations](./assets/update&installation5.png)
![Updates and Installations](./assets/update&installation6.png)



## Final Project Structure

```
intro-to-linux-project/
├── README.md
├── screenshots/
│   ├── aws-instance-setup.png
│   ├── ssh-connection.png
│   ├── apt-install-nginx.png
```

---

## Conclusion

This project covered the foundational elements of Linux, including understanding different distributions, setting up a cloud-based server, connecting securely via SSH, and managing packages using `apt` and `yum`. These concepts are vital stepping stones for any modern technology career.

