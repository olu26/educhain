import React, { useState } from 'react';
import { 
  Activity, 
  Server, 
  Database, 
  Wifi,
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const SystemMonitoring = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');

  const systemMetrics = [
    {
      name: 'API Server',
      status: 'healthy',
      uptime: '99.9%',
      responseTime: '120ms',
      requests: '1.2M',
      errors: '0.1%',
      cpu: 45,
      memory: 62,
      disk: 38
    },
    {
      name: 'Database Cluster',
      status: 'healthy',
      uptime: '99.8%',
      responseTime: '15ms',
      requests: '850K',
      errors: '0.0%',
      cpu: 32,
      memory: 78,
      disk: 55
    },
    {
      name: 'File Storage',
      status: 'warning',
      uptime: '99.5%',
      responseTime: '200ms',
      requests: '450K',
      errors: '0.3%',
      cpu: 28,
      memory: 45,
      disk: 85
    },
    {
      name: 'Authentication Service',
      status: 'healthy',
      uptime: '100%',
      responseTime: '80ms',
      requests: '320K',
      errors: '0.0%',
      cpu: 25,
      memory: 35,
      disk: 22
    }
  ];

  const alerts = [
    {
      id: '1',
      type: 'warning',
      service: 'File Storage',
      message: 'Disk usage above 80% threshold',
      timestamp: '2024-01-15T14:30:00Z',
      resolved: false
    },
    {
      id: '2',
      type: 'info',
      service: 'API Server',
      message: 'Scheduled maintenance completed successfully',
      timestamp: '2024-01-15T12:00:00Z',
      resolved: true
    },
    {
      id: '3',
      type: 'error',
      service: 'Database Cluster',
      message: 'Connection timeout resolved',
      timestamp: '2024-01-15T10:15:00Z',
      resolved: true
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getUsageColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-red-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Monitoring</h1>
          <p className="text-gray-600 mt-1">Real-time system health and performance monitoring</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="1h">Last Hour</option>
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Health</p>
              <p className="text-2xl font-bold text-green-600">98.5%</p>
            </div>
            <Activity className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Services</p>
              <p className="text-2xl font-bold text-blue-600">12/12</p>
            </div>
            <Server className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
              <p className="text-2xl font-bold text-purple-600">145ms</p>
            </div>
            <Zap className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Alerts</p>
              <p className="text-2xl font-bold text-orange-600">1</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Service Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Status</h2>
          
          <div className="space-y-4">
            {systemMetrics.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="text-gray-500">Uptime</div>
                      <div className="font-medium">{service.uptime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500">Response</div>
                      <div className="font-medium">{service.responseTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500">Requests</div>
                      <div className="font-medium">{service.requests}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500">Errors</div>
                      <div className="font-medium">{service.errors}</div>
                    </div>
                  </div>
                </div>
                
                {/* Resource Usage */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Cpu className="w-4 h-4 mr-1" />
                        CPU
                      </span>
                      <span className="text-sm font-medium">{service.cpu}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getUsageColor(service.cpu)}`}
                        style={{ width: `${service.cpu}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Monitor className="w-4 h-4 mr-1" />
                        Memory
                      </span>
                      <span className="text-sm font-medium">{service.memory}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getUsageColor(service.memory)}`}
                        style={{ width: `${service.memory}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 flex items-center">
                        <HardDrive className="w-4 h-4 mr-1" />
                        Disk
                      </span>
                      <span className="text-sm font-medium">{service.disk}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getUsageColor(service.disk)}`}
                        style={{ width: `${service.disk}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h2>
          
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-start space-x-3 p-4 rounded-lg ${
                  alert.resolved ? 'bg-gray-50' : 'bg-yellow-50'
                }`}
              >
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{alert.service}</h4>
                    <span className="text-sm text-gray-500">
                      {new Date(alert.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                  {alert.resolved && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                      Resolved
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network & Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Network Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Internet Connectivity</span>
              </div>
              <span className="text-green-600 font-medium">Excellent</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">CDN Performance</span>
              </div>
              <span className="text-green-600 font-medium">Optimal</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Database Replication</span>
              </div>
              <span className="text-green-600 font-medium">Synchronized</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Firewall Status</span>
              </div>
              <span className="text-green-600 font-medium">Active</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">SSL Certificates</span>
              </div>
              <span className="text-green-600 font-medium">Valid</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Intrusion Detection</span>
              </div>
              <span className="text-green-600 font-medium">Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitoring;