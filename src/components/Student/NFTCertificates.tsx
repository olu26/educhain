import React, { useState } from 'react';
import { 
  Award, 
  Download, 
  Eye,
  Coins,
  Shield,
  Calendar,
  User,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  Plus,
  X,
  Upload,
  Copy,
  ExternalLink
} from 'lucide-react';
import { NFTCertificate } from '../../types';

const NFTCertificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<NFTCertificate | null>(null);
  const [showMintModal, setShowMintModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [mintingAddress, setMintingAddress] = useState('');
  const [isMinting, setIsMinting] = useState(false);

  const certificates: NFTCertificate[] = [
    {
      id: '1',
      studentId: 'STU-2024-001',
      certificateType: 'academic',
      title: 'Mathematics Excellence Certificate',
      description: 'Outstanding performance in Advanced Mathematics for JSS 3',
      issuer: 'Lincoln High School',
      issueDate: '2024-01-15',
      metadata: {
        gpa: 3.8,
        grade: 'A',
        subject: 'Mathematics'
      },
      isMinted: false
    },
    {
      id: '2',
      studentId: 'STU-2024-001',
      certificateType: 'achievement',
      title: 'Debate Club Regional Champion',
      description: 'First place in Regional Inter-School Debate Competition 2024',
      issuer: 'Lincoln High School',
      issueDate: '2024-01-10',
      metadata: {
        achievement: 'Regional Champion',
        skills: ['Public Speaking', 'Critical Thinking', 'Research']
      },
      tokenId: 'NFT-001',
      mintedAt: '2024-01-12',
      mintedBy: 'Lincoln High School',
      isMinted: true,
      ipfsHash: 'QmX7Y8Z9...',
      blockchainTxHash: '0xabc123...'
    },
    {
      id: '3',
      studentId: 'STU-2024-001',
      certificateType: 'completion',
      title: 'JSS 2 Completion Certificate',
      description: 'Successfully completed Junior Secondary School 2',
      issuer: 'Lincoln High School',
      issueDate: '2023-07-20',
      metadata: {
        gpa: 3.6,
        grade: 'JSS 2'
      },
      isMinted: false
    }
  ];

  const getCertificateIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <Award className="w-6 h-6 text-blue-500" />;
      case 'achievement':
        return <Award className="w-6 h-6 text-purple-500" />;
      case 'completion':
        return <FileText className="w-6 h-6 text-green-500" />;
      case 'graduation':
        return <Award className="w-6 h-6 text-orange-500" />;
      default:
        return <FileText className="w-6 h-6 text-gray-500" />;
    }
  };

  const getCertificateColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'achievement':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'completion':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'graduation':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleMintNFT = async (certificate: NFTCertificate) => {
    if (!mintingAddress) {
      alert('Please enter a valid wallet address');
      return;
    }

    setIsMinting(true);
    
    try {
      // Simulate NFT minting process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // In a real implementation, this would interact with the ICP canister
      console.log('Minting NFT for certificate:', certificate.id);
      console.log('Recipient address:', mintingAddress);
      
      alert('NFT Certificate minted successfully! Transaction hash: 0x' + Math.random().toString(16).substr(2, 8));
      setShowMintModal(false);
      setMintingAddress('');
    } catch (error) {
      alert('Failed to mint NFT. Please try again.');
    } finally {
      setIsMinting(false);
    }
  };

  const openMintModal = (certificate: NFTCertificate) => {
    setSelectedCertificate(certificate);
    setShowMintModal(true);
  };

  const openDetailsModal = (certificate: NFTCertificate) => {
    setSelectedCertificate(certificate);
    setShowDetailsModal(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const stats = {
    total: certificates.length,
    minted: certificates.filter(c => c.isMinted).length,
    pending: certificates.filter(c => !c.isMinted).length,
    achievements: certificates.filter(c => c.certificateType === 'achievement').length
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">NFT Certificates</h2>
          <p className="text-gray-600 mt-1">Mint your achievements as NFTs on the blockchain</p>
        </div>
        
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Request Certificate</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Certificates</p>
              <p className="text-lg sm:text-2xl font-bold text-blue-600">{stats.total}</p>
            </div>
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Minted NFTs</p>
              <p className="text-lg sm:text-2xl font-bold text-purple-600">{stats.minted}</p>
            </div>
            <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Pending</p>
              <p className="text-lg sm:text-2xl font-bold text-yellow-600">{stats.pending}</p>
            </div>
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Achievements</p>
              <p className="text-lg sm:text-2xl font-bold text-green-600">{stats.achievements}</p>
            </div>
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Certificates</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className={`border-2 rounded-xl p-4 sm:p-6 transition-all hover:shadow-lg ${getCertificateColor(certificate.certificateType)}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getCertificateIcon(certificate.certificateType)}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                        {certificate.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 capitalize">
                        {certificate.certificateType}
                      </p>
                    </div>
                  </div>
                  
                  {certificate.isMinted ? (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      <span className="hidden sm:inline">Minted</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      <span className="hidden sm:inline">Pending</span>
                    </div>
                  )}
                </div>
                
                <p className="text-xs sm:text-sm text-gray-700 mb-4 line-clamp-2">
                  {certificate.description}
                </p>
                
                <div className="space-y-2 mb-4 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <span className="text-gray-600 truncate">{certificate.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                    <span className="text-gray-600">
                      {new Date(certificate.issueDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                {certificate.isMinted && certificate.tokenId && (
                  <div className="mb-4 p-3 bg-white/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">Token ID:</span>
                      <button
                        onClick={() => copyToClipboard(certificate.tokenId!)}
                        className="text-xs text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                      >
                        <span className="font-mono">{certificate.tokenId}</span>
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => openDetailsModal(certificate)}
                    className="flex-1 bg-white/70 text-gray-700 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-white transition-colors flex items-center justify-center space-x-1"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>View</span>
                  </button>
                  
                  {certificate.isMinted ? (
                    <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-1">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">View NFT</span>
                      <span className="sm:hidden">NFT</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => openMintModal(certificate)}
                      className="flex-1 bg-purple-600 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Coins className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Mint NFT</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mint NFT Modal */}
      {showMintModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Mint NFT Certificate</h3>
                <button
                  onClick={() => setShowMintModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Certificate Preview */}
                <div className={`border-2 rounded-lg p-4 ${getCertificateColor(selectedCertificate.certificateType)}`}>
                  <div className="flex items-center space-x-3 mb-3">
                    {getCertificateIcon(selectedCertificate.certificateType)}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {selectedCertificate.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {selectedCertificate.issuer}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {selectedCertificate.description}
                  </p>
                </div>
                
                {/* Wallet Address Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wallet Address (ICP Principal)
                  </label>
                  <input
                    type="text"
                    value={mintingAddress}
                    onChange={(e) => setMintingAddress(e.target.value)}
                    placeholder="Enter your ICP wallet address..."
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    The NFT will be minted to this address on the Internet Computer
                  </p>
                </div>
                
                {/* Minting Info */}
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-medium text-purple-900 mb-2 text-sm">NFT Details</h5>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-700">Network:</span>
                      <span className="text-purple-900 font-medium">Internet Computer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700">Standard:</span>
                      <span className="text-purple-900 font-medium">ICRC-7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700">Minting Fee:</span>
                      <span className="text-purple-900 font-medium">0.001 ICP</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowMintModal(false)}
                    className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleMintNFT(selectedCertificate)}
                    disabled={isMinting || !mintingAddress}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium flex items-center justify-center space-x-2"
                  >
                    {isMinting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Minting...</span>
                      </>
                    ) : (
                      <>
                        <Coins className="w-4 h-4" />
                        <span>Mint NFT</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Details Modal */}
      {showDetailsModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Certificate Details</h3>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Certificate Header */}
                <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getCertificateIcon(selectedCertificate.certificateType)}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">{selectedCertificate.title}</h4>
                  <p className="text-blue-100 text-sm">{selectedCertificate.description}</p>
                </div>
                
                {/* Certificate Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Certificate Information</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-medium capitalize">{selectedCertificate.certificateType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Issuer:</span>
                        <span className="font-medium">{selectedCertificate.issuer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Issue Date:</span>
                        <span className="font-medium">
                          {new Date(selectedCertificate.issueDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Status:</span>
                        <span className={`font-medium ${selectedCertificate.isMinted ? 'text-green-600' : 'text-yellow-600'}`}>
                          {selectedCertificate.isMinted ? 'Minted' : 'Not Minted'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Metadata</h5>
                    <div className="space-y-2 text-sm">
                      {selectedCertificate.metadata.gpa && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">GPA:</span>
                          <span className="font-medium">{selectedCertificate.metadata.gpa}</span>
                        </div>
                      )}
                      {selectedCertificate.metadata.grade && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Grade:</span>
                          <span className="font-medium">{selectedCertificate.metadata.grade}</span>
                        </div>
                      )}
                      {selectedCertificate.metadata.subject && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Subject:</span>
                          <span className="font-medium">{selectedCertificate.metadata.subject}</span>
                        </div>
                      )}
                      {selectedCertificate.metadata.achievement && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Achievement:</span>
                          <span className="font-medium">{selectedCertificate.metadata.achievement}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Skills */}
                {selectedCertificate.metadata.skills && (
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Skills Demonstrated</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.metadata.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Blockchain Info */}
                {selectedCertificate.isMinted && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-3">Blockchain Information</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Token ID:</span>
                        <button
                          onClick={() => copyToClipboard(selectedCertificate.tokenId!)}
                          className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                        >
                          <span className="font-mono text-xs">{selectedCertificate.tokenId}</span>
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                      {selectedCertificate.ipfsHash && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">IPFS Hash:</span>
                          <button
                            onClick={() => copyToClipboard(selectedCertificate.ipfsHash!)}
                            className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                          >
                            <span className="font-mono text-xs">{selectedCertificate.ipfsHash}</span>
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                      {selectedCertificate.blockchainTxHash && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500">Transaction:</span>
                          <button
                            onClick={() => copyToClipboard(selectedCertificate.blockchainTxHash!)}
                            className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                          >
                            <span className="font-mono text-xs">{selectedCertificate.blockchainTxHash}</span>
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                  
                  {!selectedCertificate.isMinted && (
                    <button
                      onClick={() => {
                        setShowDetailsModal(false);
                        openMintModal(selectedCertificate);
                      }}
                      className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Coins className="w-4 h-4" />
                      <span>Mint as NFT</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NFT Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">About NFT Certificates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-blue-800">Benefits of NFT Certificates</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Permanent and tamper-proof verification</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Global recognition and portability</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Decentralized ownership and control</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Enhanced credibility for employers</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-purple-800">How It Works</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-0.5 flex-shrink-0 text-white text-xs flex items-center justify-center">1</div>
                <span>Certificate is verified by your school</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-0.5 flex-shrink-0 text-white text-xs flex items-center justify-center">2</div>
                <span>Metadata is stored on IPFS</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-0.5 flex-shrink-0 text-white text-xs flex items-center justify-center">3</div>
                <span>NFT is minted on Internet Computer</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-0.5 flex-shrink-0 text-white text-xs flex items-center justify-center">4</div>
                <span>You own the certificate forever</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCertificates;