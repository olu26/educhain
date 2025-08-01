# decentralized-student-management

## Project Description
Educhain is a cutting-edge education management platform designed to empower multiple stakeholders including administrators, schools, parents, and students. The platform provides role-based dashboards and comprehensive features to streamline academic performance tracking, attendance management, communication, enrollment, and other critical school operations. Educhain aims to revolutionize educational administration and foster seamless collaboration across the education ecosystem.

Educhain addresses key challenges faced by current education management systems such as fragmented data, lack of transparent and secure data sharing, difficulty in verifying academic records, ineffective communication channels, and vulnerabilities of centralized systems to data breaches and downtime.

Leveraging the Internet Computer Protocol (ICP), Educhain offers decentralized data storage, enhanced security through blockchain immutability, trustless verification of academic credentials, smart contract automation for administrative workflows, and interoperability with other decentralized applications.

## Features
- Unique Digital Student ID secured by blockchain
- Instant Record Transfer between Nigerian schools
- Tamper-Proof Verification of WAEC and NECO records
- Real-Time Performance Tracking with analytics for Nigerian curriculum
- Cross-State Compatibility across all Nigerian states and FCT
- Visual Progress Dashboard with culturally relevant metrics
- NFT Certificate Minting for academic credentials on blockchain
- Comprehensive Student Dashboard with academic management, performance analytics, attendance, timetable, transfers, assignments, grading, notifications, and support

## Technologies Used
- **Frontend:** React 18 with TypeScript
- **Styling:** TailwindCSS
- **Build Tool:** Vite
- **State Management & Routing:** React Router DOM, framer-motion, recharts
- **Blockchain Integration:** DFINITY SDK libraries (@dfinity/agent, @dfinity/auth-client)
- **Backend:** Internet Computer Protocol (ICP) canisters written in Motoko
- **Linting and Code Quality:** ESLint with TypeScript support
- **Other Libraries:** crypto-js, react-intersection-observer

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd decentralized-student-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

- Start the development server:
  ```bash
  npm run dev
  ```

- Build the project for production:
  ```bash
  npm run build
  ```

- Preview the production build:
  ```bash
  npm run preview
  ```

- Deploy to Internet Computer (ICP):
  ```bash
  npm run dfx:start
  npm run dfx:deploy
  npm run dfx:stop
  ```

## Project Structure

- `src/` - Source code for frontend components and hooks
- `src/ic/` - Internet Computer canister code (Motoko and candid files)
- `dfx.json` - Configuration for DFINITY SDK and canister deployment
- `package.json` - Project metadata, dependencies, and scripts
- `vite.config.ts` - Vite build tool configuration

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License

This project does not currently specify a license. Please contact the maintainers for more information.

## Contact / Support

For questions or support, please reach out to the project maintainers.
