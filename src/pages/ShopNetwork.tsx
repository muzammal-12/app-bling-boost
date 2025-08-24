import React, { useState } from 'react';
import { ArrowLeft, Plus, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface QuoteItem {
  id: string;
  description: string;
  quantity: number;
  laborHours: number;
}

const ShopNetwork = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    { id: '1', description: 'Front brake pads & rotors', quantity: 1, laborHours: 0 }
  ]);
  const [notes, setNotes] = useState('');

  const filters = ['ALL', 'BRAKES', 'TIRES', 'FLUIDS', 'GENERAL'];

  const addQuoteItem = () => {
    const newItem: QuoteItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      laborHours: 0
    };
    setQuoteItems([...quoteItems, newItem]);
  };

  const removeQuoteItem = (id: string) => {
    setQuoteItems(quoteItems.filter(item => item.id !== id));
  };

  const updateQuoteItem = (id: string, field: keyof QuoteItem, value: string | number) => {
    setQuoteItems(quoteItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const clearQuotes = () => {
    setQuoteItems([{ id: '1', description: 'Front brake pads & rotors', quantity: 1, laborHours: 0 }]);
    setNotes('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-black text-white p-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="text-white hover:bg-white/10 mr-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Shop Network</h1>
      </header>

      <div className="p-4 space-y-6">
        {/* Shops Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Shops</h2>
          <p className="text-muted-foreground mb-4">
            Find nearby mechanics, compare quotes, and request estimates in one place.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
            <div className="flex items-center gap-2 ml-auto">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Sort by distance</span>
            </div>
          </div>
        </div>

        {/* Quote Compare Section */}
        <Card>
          <CardHeader>
            <CardTitle>Quote Compare</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quoteItems.map((item, index) => (
              <div key={item.id} className="space-y-3">
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="Item (e.g., Front brake pads & rotors)"
                    value={item.description}
                    onChange={(e) => updateQuoteItem(item.id, 'description', e.target.value)}
                    className="flex-1"
                  />
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuoteItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                      className="w-16 text-center"
                      min="0"
                    />
                    <Input
                      type="number"
                      value={item.laborHours}
                      onChange={(e) => updateQuoteItem(item.id, 'laborHours', parseInt(e.target.value) || 0)}
                      className="w-16 text-center"
                      min="0"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeQuoteItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={addQuoteItem}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Line
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Attach Quote (PDF/JPG)
              </Button>
              <span className="text-sm text-muted-foreground self-center">
                No file selected
              </span>
            </div>

            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Compare Quote
              </Button>
              <Button
                variant="outline"
                onClick={clearQuotes}
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Request Quotes Section */}
        <Card>
          <CardHeader>
            <CardTitle>Request Quotes</CardTitle>
            <p className="text-sm text-muted-foreground">
              Select shops below, add notes, then send.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Notes for shops (car, VIN/plate, symptoms, preferred times)..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[80px]"
            />
            <Button
              variant="outline"
              className="w-full"
              disabled
            >
              Send Requests to Selected
            </Button>
          </CardContent>
        </Card>

        {/* No Shops Found */}
        <div className="text-center py-8">
          <p className="text-muted-foreground">No shops found for this filter</p>
        </div>
      </div>
    </div>
  );
};

export default ShopNetwork;