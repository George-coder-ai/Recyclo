// backend/models/Alert.js
// Alert Schema for bin status monitoring

const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  binId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bin',
    required: true
  },
  
  alertType: {
    type: String,
    enum: ['warning', 'critical', 'full'],
    required: true
  },
  
  severity: {
    type: Number,
    enum: [1, 2, 3], // 1 = low, 2 = medium, 3 = high
    default: 1
  },
  
  message: String,
  fillLevel: Number, // percentage at time of alert
  
  // Status Tracking
  isResolved: {
    type: Boolean,
    default: false
  },
  resolvedAt: Date,
  
  // Escalation Management
  escalationCount: {
    type: Number,
    default: 0
  },
  lastEscalatedAt: Date,
  nextEscalationTime: Date,
  
  // Notification
  notifiedUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  // Admin Notes
  adminNotes: String,
  handledBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index for faster queries
AlertSchema.index({ binId: 1, createdAt: -1 });
AlertSchema.index({ isResolved: 1 });

module.exports = mongoose.model('Alert', AlertSchema);