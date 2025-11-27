import React, { useState, useEffect } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface PhotoUploadProps {
  onFilesChange: (files: File[]) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ onFilesChange }) => {
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Cast explicitly to File[] to ensure TS infers correct type for map callback
      const newFiles = Array.from(e.target.files) as File[];
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onFilesChange(updatedFiles);

      // Generate previews
      const newPreviews = newFiles.map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const removePhoto = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    // Revoke the old URL to avoid memory leaks
    URL.revokeObjectURL(previews[index]);

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    onFilesChange(updatedFiles);
  };

  // Cleanup URLs on unmount
  useEffect(() => {
    return () => {
      previews.forEach(url => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Upload Photos (Optional but recommended)
      </label>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {previews.map((src, index) => (
          <div key={index} className="relative aspect-video group">
            <img
              src={src}
              alt={`Upload preview ${index + 1}`}
              className="w-full h-full object-cover rounded-lg border border-slate-200"
            />
            <button
              type="button"
              onClick={() => removePhoto(index)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-90 hover:opacity-100 transition-opacity"
            >
              <X size={14} />
            </button>
          </div>
        ))}

        <label className="border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors aspect-video">
          <Upload className="text-slate-400 mb-2" size={24} />
          <span className="text-xs text-slate-500 font-medium">Add Photos</span>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {files.length === 0 && (
        <p className="text-xs text-slate-500 flex items-center">
          <ImageIcon size={14} className="mr-1" />
          Photos help us give you a more accurate guaranteed offer.
        </p>
      )}
    </div>
  );
};

export default PhotoUpload;
