import React from 'react'
import { Zap, X } from 'lucide-react'

const SosModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div style={{ textAlign: 'center', padding: '10px 0' }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'var(--accent-red)',
            borderRadius: '50%',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 0 20px var(--accent-red-glow)'
          }}>
            <Zap size={32} />
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>
            SOS Alert Triggered!
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginBottom: '20px' }}>
            Emergency mode simulated. Dispatched live telemetry signal.
          </p>

          <div style={{
            background: 'var(--bg-body)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            marginBottom: '20px',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>DISPATCH STATUS:</span>
              <span style={{ color: 'var(--primary)', fontWeight: '700' }}>BROADCASTING</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>LOCATION DIGIPIN:</span>
              <span style={{ fontFamily: 'monospace', fontWeight: '700', color: 'var(--primary)' }}>383-CFF-5L5M</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>HELPERS RESPONDING:</span>
              <span style={{ color: '#0F4C34', fontWeight: '700' }}>3 Volunteers En Route</span>
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%' }} onClick={onClose}>
            Deactivate Emergency Simulation
          </button>
        </div>
      </div>
    </div>
  )
}

export default SosModal
